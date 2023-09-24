import { serial, pgTable, text, timestamp, varchar, integer, pgEnum } from "drizzle-orm/pg-core"

// Defining an Enumeration Type
export const userSystemEnum = pgEnum('user_system_enum', ['system', 'user']);

// Defining a Table Structure for 'chats'
export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),              // Unique identifier for each chat
    pdfName: text('pdf_name').notNull(),       // Name of a PDF associated with the chat (cannot be empty)
    pdfUrl: text('pdf_url').notNull(),         // URL to access the PDF (cannot be empty)
    createdAt: timestamp('time_stamp').notNull().defaultNow(), // Timestamp when the chat was created (must have a value, defaults to the current time)
    userId: varchar('user_id', { length: 256 }).notNull(),  // User ID associated with the chat (cannot be empty)
    fileKey: text('file_key').notNull()         // A key associated with the chat's file to access from aws s3 (cannot be empty)
});

// Defining a Table Structure for 'messages'
export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),              // Unique identifier for each message
    chatId: integer('chat_id').references(() => chats.id).notNull(), // References the 'id' of the 'chats' table, representing the chat to which this message belongs (cannot be empty)
    createdAt: timestamp('created_at').notNull().defaultNow(), // Timestamp when the message was created (must have a value, defaults to the current time)
    content: text('content').notNull(),         // Actual content of the message (cannot be empty)
    role: userSystemEnum('role').notNull()       // Role of the message sender, restricted to values 'system' or 'user' based on the defined enumeration (cannot be empty)
});
