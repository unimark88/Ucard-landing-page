import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const cardSignups = pgTable("card_signups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  country: text("country"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
})
