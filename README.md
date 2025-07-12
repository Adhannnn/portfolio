# Portfolio Website (Dockerized)

This is a personal portfolio website that I built using **React**, **Vite**, and **Tailwind CSS**.  
I created it to showcase my profile, skills, and some of the projects I’ve worked on.

To make the website easier to demonstrate on any machine (especially for evaluation purposes), I packaged the entire app using **Docker**. This allows it to be run without installing Node.js or any front-end tooling.

The portfolio is still under development and will continue to grow as I learn and build more.

# Tech Stack :
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

# How to Run ? (With Docker)

### Requirements
* Docker  
* Docker Compose

### Steps

```bash
# 1. Clone or extract this repo
git clone https://github.com/Adhannnn/portfolio.git

# 2. Open the folder
cd portfolio

# 3. Build image docker
docker build -t portfolio .

# 4. Start the container in the background
docker compose up --build

# 3. Open the site in your browser
# (The dev server inside the container listens on port 5173)
http://localhost:5173


