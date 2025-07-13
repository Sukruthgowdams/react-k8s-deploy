

# 🚀 React App with Docker, Kubernetes, and CI/CD

This project is a **React-based web application** built using **Vite**, styled with **Tailwind CSS**, containerized using **Docker**, orchestrated using **Kubernetes**, and deployed using **CI/CD (GitHub Actions)**. The final deployment is hosted publicly using **Railway**.

---

## 🧠 Features

- ⚛️ Modern React app built with Vite
- 🎨 Tailwind CSS for fast and responsive styling
- 🐳 Docker for containerization
- ☸️ Kubernetes for orchestration
- 🔁 CI/CD with GitHub Actions + Self-hosted runner
- ☁️ Public deployment via Railway

---

## 📂 Project Structure

```bash
.
├── src/                 # React source code
├── public/              # Static assets
├── Dockerfile           # Docker image definition
├── k8s/
│   ├── deployment.yaml  # Kubernetes Deployment
│   └── service.yaml     # Kubernetes Service
├── .github/workflows/
│   └── deploy.yml       # CI/CD GitHub Actions workflow
├── README.md
````


## 🚀 Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

---

## 📦 Docker Usage

### 🛠️ Build Docker Image

```bash
docker build -t yourusername/react-k8s .
```

### ▶️ Run Locally

```bash
docker run -p 8080:80 yourusername/react-k8s
```

---

## ☸️ Kubernetes Setup (Minikube)

### 🔹 Start Minikube

```bash
minikube start
```

### 🔹 Apply Kubernetes Manifests

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### 🔹 Access App

```bash
minikube service react-service
```

---

## 🔁 GitHub Actions CI/CD

Every push to the `main` branch triggers the following:

1. Checkout the repo
2. Build Docker image
3. Push to DockerHub
4. Deploy to Kubernetes using `kubectl`

> This is handled by a **self-hosted GitHub Actions runner** running on your machine (or Minikube VM).

---

## ☁️ Public Deployment (Railway)

The app is deployed using Railway’s **Docker deployment** service.

**Live URL:** [https://react-k8s-deploy-production.up.railway.app](https://react-k8s-deploy-production.up.railway.app)

> Railway automatically builds and serves the Docker container with Nginx.

---

## 🔐 Secrets

| Secret Name       | Purpose                  |
| ----------------- | ------------------------ |
| `DOCKER_USERNAME` | DockerHub login          |
| `DOCKER_PASSWORD` | DockerHub password/token |

Add these under your GitHub repository **Settings > Secrets and Variables > Actions**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Author

**Sukruth MS**
Built for educational & DevOps learning purposes.

