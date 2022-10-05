-- POST produtos 

INSERT INTO 
	products (name, price, category_id)
VALUES 
 	('sofá', 2500, 3),
  ('bola', 50, 8),
  ('notebook Dell', 5500, 5),
  ('Computador AIO LG', 2000, 5),
  ('TV 50 polegadas LG', 2300, 4)
;

-- GET produtos 

SELECT 
	*
FROM 
  products
ORDER BY 
  products.category_id
; 

-- DELETE produtos

DELETE FROM 
  products 
WHERE
  products.id = '0486fdb7-8784-4577-b06b-88bb9f6db9d3';

-- UPDATE produtos 

UPDATE
	products
SET 
 	name = 'sofá-cama', price = 3500
WHERE 
 	products.id = '2d4395b8-5701-4311-aec0-6ecdd09e6195'  
RETURNING *
;

-- GET produtos com categorias

SELECT 
	* 
FROM 
	products
JOIN 
	categories ON products.category_id = categories.id
WHERE categories.id = 5
;