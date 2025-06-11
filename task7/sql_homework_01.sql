
-- 1. Parašykite užklausą, kuri ištrauktų stulpelius „first_name“, „last_name“  iš lentelės „actor“ 
-- surūšiuotus pagal „last_name“ mažėjimo tvarka.  
SELECT first_name, last_name FROM actor ORDER BY last_name DESC;

-- 2.Parašykite užklausą, kuri ištrauktų stulpelius „first_name“, „last_name“  iš lentelės „actor“ 
-- sugrupuotus pagal stulpelį „first_name“ ir surūšiuotus pagal „first_name“ mažėjimo tvarka. 

SELECT first_name, last_name FROM actor GROUP BY first_name ORDER BY first_name DESC;

SELECT first_name, last_name FROM actor ORDER BY first_name DESC;

-- 3.Parašykite SQL užklausą, kuri ištrauktų visas skirtingas stulpelio „first_name“  reikšmes iš lentelės 
-- „actor“. 
SELECT DISTINCT first_name
FROM actor;

-- 4.Parašykite SQL užklausą, kuri pateiktų filmo pavadinimą, nuomos kainą ir filmo trukmę, pagal filmo 
-- trukmę nuo trumpiausio iki ilgiausio. Naudokite lentelę „film“. 
SELECT title, rental_rate, length FROM film ORDER BY length ASC;

-- 5.Parašykite SQL užklausą, kuri nurodo kiek kartų pasikartojo kiekvienas aktoriaus vardas. 
-- Naudokite lentelę „actor“. 
SELECT first_name, COUNT(*) FROM actor GROUP BY first_Name ORDER BY count DESC;

-- 6.Parašykite SQL užklausą, kuri paskaičiuoja bendrą visų mokėjimų sumą. Rezultatą pateikite  
-- stulpelyje „Iš viso“. Naudokite lentelę „payment“.  
SELECT SUM(amount) as "Iš viso" FROM payment;

-- 7.Parašykite SQL užklausą, kuri ištraukia didžiausią atliktą įmoką. Rezultatą pateikite stulpelyje  
-- „Didžiausias mokėjimas”. Naudokite lentelę „payment“. 
SELECT amount AS "Didžiausias mokėjimas" FROM payment ORDER BY amount DESC LIMIT 1;

-- 8.Parašykite SQL užklausą, kuri pateikia kiekvieno kliento didžiausią mokėjimą mažėjimo tvarka.  
-- Naudokite lentelę „payment“.
SELECT customer_id, MAX(amount) FROM payment GROUP BY customer_id ORDER BY 2 DESC;

-- 9.Parašykite SQL užklausą, kuri ištrauktų visus stulpelius iš lentelės „actor“ , kur stulpelio „first_name“ 
-- reikšmė yra Nick.  
SELECT * FROM actor WHERE first_name = 'Nick';

-- 10.Parašykite SQL užklausą, kuri pateiktų filmo pavadinimą, aprašymą, išleidimo metus, reitingą, kai reitingas 
-- yra PG. Naudokite lentelę „film“.  
SELECT title, description, release_year, rating FROM film WHERE rating = 'PG';

-- 11.Parašykite SQL užklausą, kuri ištrauktų filmo pavadinimą, nuomos trukmę, nuomos kainą, kai nuomos 
-- kaina yra 4.99 arba mažiau, o nuomos trukmė 5 ir 6. Naudokite lentelę „film“. 
SELECT title, rental_duration, rental_rate FROM film WHERE rental_rate = '4.99' AND rental_duration BETWEEN 5 AND 6;

-- 12.Parašykite SQL užklausą, kuri ištrauktų visus filmus, kurių žanro aprašymas prasideda žodžiu 
-- “Trailers”. Naudokite lentelę „film“. 
SELECT * FROM film WHERE description LIKE 'Trailers%';


-- pirmas elementas yra 'Trailers'
SELECT * FROM film WHERE special_features[1] = 'Trailers';


-- Zanras 'Trailers' yra bet kurioje masyvo vietoje
SELECT * FROM film WHERE 'Trailers' = ANY(special_features);


-- 13.Parašykite užklausą, kuri ištraukia visus filmų pavadinimus, kurie prasideda raide „z“. Naudokite  
-- lentelę „film“.  
SELECT * FROM film WHERE title LIKE 'Z%' OR title LIKE 'z%';

-- 14.Parašykite SQL užklausą, kuri ištraukia filmo pavadinimą, nuomos kainą, (pavėluoto) grąžinimo  
-- kainą, o bendra nuomos kaina ir (pavėluoto) grąžinimo kaina pateikiama naujame stulpelyje “total”.  
-- Naudokite lentelę „film“.  
SELECT title, rental_rate, replacement_cost, rental_rate + replacement_cost AS total FROM film;

-- 15.Parašykite SQL užklausą, kuri ištrauktų filmų pavadinimus, nuomos kainą, trukmę, kai nuomos kaina  
-- yra 2.99 arba trukmė yra 130. Naudokite lentelę „film“. 
SELECT title, rental_rate, length FROM film WHERE rental_rate = '2.99' OR length = 130;

-- 16.Parašykite užklausą, pateikiančią visus klientus, kurie dar negrąžino išsinuomotų filmų. Naudokite  
-- lentelę “rental”.
SELECT * FROM rental LEFT JOIN customer ON customer.customer_id = rental.customer_id WHERE return_date IS NULL;


-- 17.Parašykite SQL užklausą, kuri pateikia visą informaciją apie nuomą tarp išnuomojimo laikotarpių  
-- '2005-05-24 22:54:33' ir '2005-05-24 23:05:21'. Naudokite lentelę “rental”.  
SELECT * FROM rental WHERE rental_date BETWEEN '2005-05-24 22:54:33' AND '2005-05-24 23:05:21';



