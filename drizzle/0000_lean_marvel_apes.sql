CREATE TABLE `logs` (
	`id` integer PRIMARY KEY NOT NULL,
	`hostname` text,
	`scan_id` text,
	`thor_version` text,
	`admin_rights` text,
	`platform` text,
	`cpu_count` integer,
	`memory` integer,
	`ip` text,
	`log` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `hostname_idx` ON `logs` (`hostname`);