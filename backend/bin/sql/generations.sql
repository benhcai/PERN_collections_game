CREATE TABLE generations(
	id					SERIAL PRIMARY KEY, /* SERIAL is a psuedo-type of Postgers */
	expiration	TIMESTAMP NOT NULL
);
