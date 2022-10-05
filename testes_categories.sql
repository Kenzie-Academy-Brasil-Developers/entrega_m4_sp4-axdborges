-- POST categories

INSERT INTO 
	categories ( name)
VALUES 
 	('eletrodomésticos'),
    ('móveis'),
    ('celulares'),
    ('televisores'),
    ('informática')
;

-- GET categories

SELECT 
	*
FROM categories
;

-- GET uma categoria 

SELECT 
	*
FROM 
 	categories
WHERE 
 	categories.id = 3
;

-- PATCH uma categoria 

UPDATE
	categories
SET 
 	name = 'telefonia'
WHERE 
 	categories.id = 3   
RETURNING *
;

-- DELETE uma categoria 

DELETE FROM categories WHERE categories.id = 3;