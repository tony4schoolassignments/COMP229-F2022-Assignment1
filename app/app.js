/*
    COMP229-401 Fall 2022
    Assignment 1 - Express Portfolio Site
    Date: October 1, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: app.js
*/
// Third party modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration module
import { Secret } from '../config/config.js';

// Import routes from index.route.server.js
import indexRouter from "./routes/index.route.server.js"

// Instantiate Express
const app = express();

// Set up middlewares
// Set up ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
// Using third party modules
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Loading public folder as static files on client side
app.use(express.static(path.join(__dirname, '../public')));
app.unsubscribe(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use routes from index.route.server.js
app.use('/', indexRouter);

export default app;
