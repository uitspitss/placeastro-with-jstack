CREATE TABLE `place_images` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`credits` text NOT NULL,
	`source_url` text NOT NULL,
	`catalogue` text NOT NULL,
	`catalogue_number` text NOT NULL,
	`creator_id` text,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	`deleted_at` text,
	FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `catalogue_idx` ON `place_images` (`catalogue`);--> statement-breakpoint
CREATE INDEX `catalogue_number_idx` ON `place_images` (`catalogue_number`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `users` (`email`);