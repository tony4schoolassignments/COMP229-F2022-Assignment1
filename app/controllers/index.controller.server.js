/*
    COMP229-401 Fall 2022
    Assignment 1 - Express Portfolio Site
    Date: October 1, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: index.controller.server.js
*/
export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home' });
};

export function displayAboutPage(req, res, next){
    res.render('index', { title: 'About Me', page: 'about' });
};

export function displayProjectsPage(req, res, next){
    res.render('index', { title: 'Projects', page: 'projects' });
};

export function displayServicesPage(req, res, next){
    res.render('index', { title: 'Services', page: 'services' });
};

export function displayContactPage(req, res, next){
    res.render('index', { title: 'Contact', page: 'contact' });
};