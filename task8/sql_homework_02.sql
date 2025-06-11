-- 1. Parašykite SQL užklausą, kuri pateikia sąrašą su pardavėjo vardu ir pavarde, kliento vardu ir pavarde, 
-- ir parduotuvės ID, kuriai priklauso ir pardavėjas, ir klientas (pardavėjas dirba, o klientas ateina 
-- išsinuomoti filmo). Naudokite lenteles staff ir customer. 

SELECT
	s.store_id,
	s.first_name AS staff_first_name,
	s.last_name AS staff_last_name,
	c.first_name AS customer_first_name,
	c.last_name AS customer_last_name
FROM staff s
INNER JOIN customer c ON c.store_id = c.store_id;

SELECT
	DISTINCT 
	s.store_id,
	s.first_name AS staff_first_name,
	s.last_name AS staff_last_name,
	c.first_name AS customer_first_name,
	c.last_name AS customer_last_name
FROM payment p
LEFT JOIN staff s ON p.staff_id = s.staff_id
LEFT JOIN customer c ON p.customer_id = c.customer_id
ORDER BY store_id ASC, staff_first_name ASC, customer_first_name ASC;

-- 2. Parašykite SQL užklausą, pateikiančią kliento vardą, kliento pavardę, atliktą mokėjimą, mokėjimo 
-- datą tiems mokėjimams, kurių vertė yra 2.99, 4.99, 6.99. Naudokite lenteles „customer“ ir 
-- „payment“.  

SELECT 
	c.first_name,
	c.last_name,
	p.amount,
	p.payment_date
FROM payment p
LEFT JOIN customer c ON p.customer_id = c.customer_id
WHERE p.amount IN (2.99, 4.99, 6.99);

-- 3. Parašykite SQL užklausą, pateikiančią mokėjimo ID, mokėjimo datą, mokėjimo sumą, kliento vardą ir 
-- pavardę, pardavėjo vardą ir pavardę. Naudokite lenteles „payment“, „customer“, „staff“.  

SELECT
	p.payment_id,
	-- p.payment_date,
	DATE(p.payment_date) AS payment_date,
	p.amount,
	c.first_name AS customer_first_name,
	c.last_name AS customer_last_name,
	s.first_name AS staff_first_name,
	s.last_name AS staff_last_name
FROM payment p
LEFT JOIN staff s ON p.staff_id = s.staff_id
LEFT JOIN customer c ON p.customer_id = c.customer_id;

-- 4. Parašykite SQL užklausą, pateikiančią kiekvieno kliento, išleidusio nuomai iš viso nuo 150 iki 200, 
-- vardą ir pavardę. Taip pat pateikite ir pardavėjo vardą bei pavardę, aptarnavusio šiuos klientus. 
-- Rezultatą surušiuokite pagal iš viso išleistą sumą nuomai didėjimo tvarka. Naudokite lenteles 
-- „payment“, „customer“, „staff“. 

SELECT 
	DISTINCT
	c.first_name AS customer_first_name,
	c.last_name AS customer_first_name,
	s.first_name AS staff_first_name,
	s.last_name AS staff_last_name,
	t.total_spent
FROM (
	SELECT customer_id, sum(amount) AS total_spent
	FROM payment
	GROUP BY customer_id
	HAVING sum(amount) BETWEEN 150 AND 200
) AS t
LEFT JOIN payment p ON p.customer_id = t.customer_id
LEFT JOIN customer c ON c.customer_id = p.customer_id
LEFT JOIN staff s ON s.staff_id = p.staff_id
ORDER BY t.total_spent DESC;


--a i
SELECT 
  c.first_name AS customer_first_name,
  c.last_name AS customer_last_name,
  t.total_spent,
  STRING_AGG(DISTINCT s.first_name || ' ' || s.last_name, ', ') AS staff_members
FROM (
  SELECT customer_id, SUM(amount) AS total_spent
  FROM payment
  GROUP BY customer_id
  HAVING SUM(amount) BETWEEN 150 AND 200
) AS t
JOIN payment p ON p.customer_id = t.customer_id
JOIN customer c ON c.customer_id = p.customer_id
JOIN staff s ON s.staff_id = p.staff_id
GROUP BY c.customer_id, c.first_name, c.last_name, t.total_spent
ORDER BY t.total_spent DESC;






-- 5. Parašykite užklausą, kuri pateikia 2006-02-14 išnuomuotų filmų pavadinimus. Naudokite lenteles 
-- „film“, „inventory“, „rental“.  

SELECT f.title
FROM rental r
LEFT JOIN inventory i ON i.inventory_id = r.inventory_id
LEFT JOIN film f ON f.film_id = i.film_id
WHERE DATE(rental_date) = '2006-02-14'


-- 6. Pateikite Graikijoje gyvenančių klientų vardą, pavardę ir miesto pavadinimą. 

SELECT first_name, last_name, city
FROM customer cust
LEFT JOIN address adr ON adr.address_id = cust.address_id
LEFT JOIN city ON city.city_id = adr.city_id
LEFT JOIN country coun ON coun.country_id = city.country_id
WHERE coun.country = 'Greece';

-- 7. Suskaičiuokite kiek koks klientas buvo išsinuomojęs filmų. Rodykite tik tuos klientus, kurie 
-- išsinuomojo daugiau nei 2 filmus. Nuomos įrašai saugome lentoje rental. 

SELECT c.first_name, c.last_name, f.title AS movie, COUNT(*) AS rent_times
FROM rental r
LEFT JOIN inventory i ON r.inventory_id = i.inventory_id
LEFT JOIN customer c ON c.customer_id = r.customer_id
LEFT JOIN film f ON f.film_id = i.film_id
GROUP BY r.customer_id, i.film_id, c.first_name, c.last_name, f.title
HAVING COUNT(*) > 2

