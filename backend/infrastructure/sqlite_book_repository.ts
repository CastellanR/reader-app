const bookSchema = `
CREATE TABLE IF NOT EXISTS books (
		id varchar(64) PRIMARY KEY,
		name varchar(255) NOT NULL,		
		created_at datetime NOT NULL,
		updated_at datetime NOT NULL,
		deleted_at datetime,
		version integer NOT NULL
	);
`;
