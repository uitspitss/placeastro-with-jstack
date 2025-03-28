CREATE TABLE `place_images` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`credits` text NOT NULL,
	`source_url` text NOT NULL,
	`catalogue` text NOT NULL,
	`catalogue_number` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	`deleted_at` text
);
--> statement-breakpoint
CREATE INDEX `catalogue_idx` ON `place_images` (`catalogue`);--> statement-breakpoint
CREATE INDEX `catalogue_number_idx` ON `place_images` (`catalogue_number`);