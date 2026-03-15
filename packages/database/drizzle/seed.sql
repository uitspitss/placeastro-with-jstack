-- Seed data: Messier catalogue objects
INSERT OR IGNORE INTO `place_images` (`id`, `url`, `credits`, `source_url`, `catalogue`, `catalogue_number`, `created_at`, `updated_at`)
VALUES
  ('seed-m1', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M1+Crab+Nebula', 'NASA, ESA, J. Hester and A. Loll (Arizona State University)', 'https://en.wikipedia.org/wiki/Crab_Nebula', 'M', '1', current_timestamp, current_timestamp),
  ('seed-m2', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M2+Globular+Cluster', 'NASA, ESA, STScI, and A. Sarajedini (University of Florida)', 'https://en.wikipedia.org/wiki/Messier_2', 'M', '2', current_timestamp, current_timestamp),
  ('seed-m3', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M3+Globular+Cluster', 'NASA, ESA, STScI, and A. Sarajedini (University of Florida)', 'https://en.wikipedia.org/wiki/Messier_3', 'M', '3', current_timestamp, current_timestamp),
  ('seed-m31', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M31+Andromeda', 'Adam Evans', 'https://en.wikipedia.org/wiki/Andromeda_Galaxy', 'M', '31', current_timestamp, current_timestamp),
  ('seed-m42', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M42+Orion+Nebula', 'NASA, ESA, M. Robberto (STScI/ESA)', 'https://en.wikipedia.org/wiki/Orion_Nebula', 'M', '42', current_timestamp, current_timestamp),
  ('seed-m45', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M45+Pleiades', 'NASA, ESA, AURA/Caltech, Palomar Observatory', 'https://en.wikipedia.org/wiki/Pleiades', 'M', '45', current_timestamp, current_timestamp),
  ('seed-m51', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M51+Whirlpool', 'NASA, ESA, S. Beckwith (STScI), Hubble Heritage Team', 'https://en.wikipedia.org/wiki/Whirlpool_Galaxy', 'M', '51', current_timestamp, current_timestamp),
  ('seed-m101', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=M101+Pinwheel', 'NASA, ESA, K. Kuntz (JHU), et al.', 'https://en.wikipedia.org/wiki/Pinwheel_Galaxy', 'M', '101', current_timestamp, current_timestamp),
  ('seed-ngc6543', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=NGC6543+Cats+Eye', 'NASA, ESA, HEIC, Hubble Heritage Team (STScI/AURA)', 'https://en.wikipedia.org/wiki/Cat%27s_Eye_Nebula', 'NGC', '6543', current_timestamp, current_timestamp),
  ('seed-ngc7293', 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=NGC7293+Helix', 'NASA, ESA, C.R. ODell (Vanderbilt University)', 'https://en.wikipedia.org/wiki/Helix_Nebula', 'NGC', '7293', current_timestamp, current_timestamp);
