-- CREATE DATABASE "weekend-to-do-app";

-- Table structure
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(100) NOT NULL,
	"complete" BOOLEAN DEFAULT false
);

INSERT INTO "tasks" ("task", "complete")
VALUES ('Change lightbulb', false), 
('Wash dishes.',false), 
('Change Furnace Filter', true);
