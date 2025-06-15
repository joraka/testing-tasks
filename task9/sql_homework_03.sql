-- 1. Sukurkite lentelę darbuotojai (darbuotojo id, vardas, pavardė, elektroninis paštas, adresas, 
-- atlyginimas). 


CREATE TABLE IF NOT EXISTS employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT,
    salary NUMERIC(10, 2)
);


-- 2. Užpildykite lentelę penkiais savo pasirinktais įrašais. 

INSERT INTO employees (first_name, last_name, email, address, salary)
VALUES
('Tomas', 'Petrauskas', 'tomas.petrauskas@example.com', 'Vilniaus g. 12, Vilnius', 1010.00),
('Aistė', 'Jonaitė', 'aiste.jonaite@example.com', 'Kauno g. 45, Kaunas', 2500.50),
('Mantas', 'Kavaliauskas', 'mantas.kavaliauskas@example.com', 'Laisvės al. 78, Šiauliai', 1325.75),
('Rūta', 'Žukaitė', 'ruta.zukaite@example.com', 'Gedimino pr. 101, Panevėžys', 900.00),
('Dainius', 'Stankevičius', 'dainius.stankevicius@example.com', 'Aušros g. 33, Klaipėda', 1234.99);

-- 3. Sukurkite lentelę užsakymai (užsakymo id, daiktas, valstybė, darbuotojo_id). (kiekvienas darbuotojas 
-- atlieka tam tikra uzsakyma) 

CREATE TABLE IF NOT EXISTS orders (
	order_id SERIAL PRIMARY KEY,
	item VARCHAR(255) NOT NULL,
	country VARCHAR(255) NOT NULL,
	employee_id INTEGER NOT NULL
);

-- 4. Užpildykite lentelę penkiais savo pasirinktais įrašais.

INSERT INTO orders (item, country, employee_id)
VALUES
('iPhone 14', 'Lietuva', 1),
('Samsung Galaxy S23', 'Latvija', 2),
('iPad Air', 'Estija', 3),
('LG UltraGear 27GL850', 'Lenkija', 4),
('LG UltraGear 27GL850', 'Lenkija', 4),
('LG UltraGear 13GL850', 'Lenkija', 4),
('LG UltraGear 14GL850', 'Lenkija', 4),
('LG UltraGear 15GL850', 'Lenkija', 4),
('LG UltraGear 16GL850', 'Lenkija', 4),
('Canon PIXMA G3411', 'Vokietija', 5);

-- 5. Atnaujinkite darbuotojų lentelę ir pakeiskite bet kurio darbuotojo įrašo visus laukelius. 

UPDATE employees
SET
first_name = 'Justinas',
last_name = 'Kazlauskas',
email = 'justinas.kazlauskas@example.com',
address = 'Naujoji g. 5, Alytus',
salary = 999.00
WHERE employee_id = 3;

-- 6. Duomenų tipą varchar(244), pakeiskite į varchar (100) bet kuriame teksto laukelyje.

ALTER TABLE orders
ALTER COLUMN item TYPE VARCHAR(100);

-- 7. Sujunkite lenteles ir parodykite visą informaciją iš abiejų lentelių. 

SELECT *
FROM employees
JOIN orders ON employees.employee_id = orders.employee_id;

-- 8. Parašykite užklausą kuri gražintų darbuotojo_id ir jo atliktų užsakymų kiekį. 

SELECT employee_id, COUNT(*) AS orders_count
FROM orders
GROUP BY employee_id;

-- 9. Ištrinkite lentelės turinį. 

TRUNCATE TABLE employees CASCADE;
TRUNCATE TABLE orders CASCADE;

-- 10. Ištrinkite lentelės struktūrą. 

DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS employees;

---------------------------------------------------------------------

-- 11. Sukurkite laikinąją lentelę kuri saugotų visą informaciją apie filmus kurių reitingas NC-17 arba PG, bei 
-- nuomos ilgis ilgesnis negu 3. 

CREATE TEMPORARY TABLE filtered_movies AS
SELECT *
FROM film
WHERE rating IN ('NC-17', 'PG')
  AND rental_duration > 3;

-- 12. Naudodami laikinąją lentęlę kurią sukūrėte 11 uždavinyje atsakykite į šiuos klausimus :  
-- a) Kiek išvis yra tokių filmų? 
SELECT COUNT(*) AS total_filtered_movies
FROM filtered_movies;

-- b) Kokia vidutine jų nuomos trukmė?  
SELECT ROUND(AVG(rental_duration), 1) AS average_rental_duration
FROM filtered_movies;

-- c) Kiek kiekvieno reitingo filmų yra laikinojoje lentelėjė? 
SELECT rating, COUNT(*) AS count_per_rating
FROM filtered_movies
GROUP BY rating;

-- 13. Sukurkite laikinąją lentelę kuri saugo informaciją apie aktoriaus vardą ir pavardę bei kiekį. Į ją 
-- įterpkite tuos aktorius kurie suvaidinę daugiau negu 10 filmų.  
-- Lentelę pavadinkite (laikina_populiarus_aktoriai). 

CREATE TEMPORARY TABLE IF NOT EXISTS temp_popular_actors AS
SELECT 
    a.first_name,
    a.last_name,
    COUNT(fa.film_id) AS film_count
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
GROUP BY a.actor_id, a.first_name, a.last_name
HAVING COUNT(fa.film_id) > 10;

-- 14. Atnaujinkite vardų irašus ir ten kur vardų ilgiai yra lygiai 6, nustatykite savo sugalvotą vardą.

SELECT * FROM temp_popular_actors WHERE LENGTH(first_name) = 6;

UPDATE temp_popular_actors
SET first_name = 'Bob 123'
WHERE LENGTH(first_name) = 6;

SELECT * FROM temp_popular_actors WHERE first_name = 'Bob';


-- 15.  Ištrinkite laikinąsias lenteles. 

DROP TABLE IF EXISTS temp_popular_actors;
DROP TABLE IF EXISTS filtered_movies;
