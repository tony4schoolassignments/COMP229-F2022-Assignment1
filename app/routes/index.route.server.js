/*
    COMP229-401 Fall 2022
    Assignment 1 - Express Portfolio Site
    Date: October 1, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: index.route.server.js
*/
import { Router } from 'express';
import {  displayAboutPage, displayContactPage, displayHomePage, displayProjectsPage, displayServicesPage } from '../controllers/index.controller.server.js';

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);

export default router;