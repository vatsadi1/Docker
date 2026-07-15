# Docker Cheat Sheet

A quick reference for the most commonly used Docker commands.

---

# Install Docker

Download Docker Desktop:

* Windows / macOS: https://www.docker.com/products/docker-desktop/
* Linux: https://docs.docker.com/engine/install/

Verify installation:

```bash
docker --version
docker compose version
```

---

# Project Structure

```
project/
│── Dockerfile
│── package.json
│── package-lock.json
│── server.js
```

---

# Basic Dockerfile (Node.js)

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

For Express apps:

```javascript
app.listen(3000);
```

or

```javascript
app.listen(process.env.PORT || 3000);
```

---

# Build Image

```bash
docker build -t my-app .
```

Specify Dockerfile:

```bash
docker build -f Dockerfile -t my-app .
```

Tag a version:

```bash
docker build -t my-app:v1 .
```

---

# List Images

```bash
docker images
```

---

# Run Container

```bash
docker run my-app
```

Run with port mapping:

```bash
docker run -p 3000:3000 my-app
```

Detached mode:

```bash
docker run -d -p 3000:3000 my-app
```

Give container a name:

```bash
docker run --name backend -p 3000:3000 my-app
```

Environment variables:

```bash
docker run -e PORT=3000 my-app
```

Load environment file:

```bash
docker run --env-file .env my-app
```

Restart automatically:

```bash
docker run --restart unless-stopped my-app
```

---

# Running Containers

```bash
docker ps
```

All containers:

```bash
docker ps -a
```

---

# Stop Container

```bash
docker stop <container_id>
```

---

# Start Container

```bash
docker start <container_id>
```

---

# Restart Container

```bash
docker restart <container_id>
```

---

# Remove Container

```bash
docker rm <container_id>
```

Force remove:

```bash
docker rm -f <container_id>
```

---

# Remove Image

```bash
docker rmi <image_id>
```

Force remove:

```bash
docker rmi -f <image_id>
```

---

# View Logs

```bash
docker logs <container_id>
```

Live logs:

```bash
docker logs -f <container_id>
```

---

# Execute Commands Inside Container

```bash
docker exec -it <container_id> sh
```

Ubuntu image:

```bash
docker exec -it <container_id> bash
```

---

# Copy Files

Host → Container

```bash
docker cp file.txt container:/app/
```

Container → Host

```bash
docker cp container:/app/file.txt .
```

---

# Inspect Container

```bash
docker inspect <container_id>
```

---

# View Resource Usage

```bash
docker stats
```

---

# List Networks

```bash
docker network ls
```

Create network:

```bash
docker network create my-network
```

Run on network:

```bash
docker run --network my-network my-app
```

---

# List Volumes

```bash
docker volume ls
```

Create volume:

```bash
docker volume create my-volume
```

Use volume:

```bash
docker run -v my-volume:/app/data my-app
```

Bind mount:

```bash
docker run -v $(pwd):/app my-app
```

Windows PowerShell:

```powershell
docker run -v ${PWD}:/app my-app
```

---

# Clean Up

Remove stopped containers:

```bash
docker container prune
```

Remove unused images:

```bash
docker image prune
```

Remove everything unused:

```bash
docker system prune
```

Remove everything including volumes:

```bash
docker system prune -a --volumes
```

---

# Pull Image

```bash
docker pull nginx
```

---

# Run Nginx

```bash
docker run -d -p 80:80 nginx
```

---

# Push Image to Docker Hub

Login:

```bash
docker login
```

Tag image:

```bash
docker tag my-app username/my-app:v1
```

Push:

```bash
docker push username/my-app:v1
```

---

# Docker Compose

Example `docker-compose.yml`

```yaml
version: "3.9"

services:
  app:
    build: .
    ports:
      - "3000:3000"
```

Start:

```bash
docker compose up
```

Detached:

```bash
docker compose up -d
```

Build:

```bash
docker compose up --build
```

Stop:

```bash
docker compose down
```

View logs:

```bash
docker compose logs
```

Restart:

```bash
docker compose restart
```

---

# Useful Commands

Image history:

```bash
docker history my-app
```

Image details:

```bash
docker image inspect my-app
```

Container details:

```bash
docker inspect backend
```

Show Docker disk usage:

```bash
docker system df
```

Remove all stopped containers:

```bash
docker container prune -f
```

Remove all unused images:

```bash
docker image prune -a
```

---

# Common Interview Commands

```bash
docker --version
docker images
docker ps
docker ps -a
docker build -t app .
docker run -d -p 3000:3000 app
docker exec -it container sh
docker logs container
docker stop container
docker start container
docker restart container
docker rm container
docker rmi image
docker network ls
docker volume ls
docker compose up
docker compose down
docker system prune -a
```

---

# Docker Workflow

```
Write Dockerfile
        │
        ▼
docker build -t app .
        │
        ▼
docker images
        │
        ▼
docker run -d -p 3000:3000 app
        │
        ▼
docker ps
        │
        ▼
docker logs <container>
        │
        ▼
docker exec -it <container> sh
        │
        ▼
docker stop <container>
        │
        ▼
docker rm <container>
```
