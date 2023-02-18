CREATE TABLE plants (
	id bigint generated always as identity primary key,
	name TEXT NOT NULL,
	is_herb BOOLEAN NOT NULL,
	is_perennial BOOLEAN NOT NULL,
	img_url TEXT
);

INSERT INTO plants (name, is_herb, is_perennial, img_url) values('Catnip', true, true, 'https://www.everwilde.com/media/0800/HCATNIP-A-Catnip-Seeds.jpg')

select * from plants