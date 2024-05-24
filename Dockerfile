FROM node:12.12.0-alpine

# Establecer el directorio de trabajo en /appnodejs
WORKDIR /appnodejs

# Copiar el archivo package.json y package-lock.json (si existe) al directorio de trabajo
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Definir el comando de inicio
CMD ["npm", "start"]
