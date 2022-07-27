<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">

# CRUD Contacts

<span style="font-family: 'Poppins', sans-serif;font-size:9pt">
Criação de um CRUD (CREATE / READ / UPDATE / DELETE) com NodeJs para a realização de uma agenda de contatos. Nessa agenda de contatos é possível salvar o nome, o email e o telefone da pessoa e também é possível salvar a pessoa em uma categoria de contatos. <br/>
Por exemplo: O Pedro de número 85900000000 e e-mail pedro@teste.com está na categoria Família.

<br />

Foi-se utilizado nesse projeto as seguintes ferramentas e habilidades:
<br />

• Express (Criação do Servidor)
<br />
• Docker (Criação do Banco de dados)
<br />• Postgres (Banco de Dados)
<br />• SQL (Banco de Dados)
<br />• Estruturação de projeto Node
<br />• EsLint
<br />• CRUD
<br />• Controllers (Estruturação do projeto para ser enviado para as rotas) e Repositories (Regra de negócio)

<br/>

## Run Locally

<span style="font-family: 'Poppins', sans-serif;font-size:9pt">
Clone the project
</span>

```bash
  git clone https://link-to-project
```

<span style="font-family: 'Poppins', sans-serif;font-size:9pt">
Go to the project directory
</span>

```bash
  cd my-project
```

<span style="font-family: 'Poppins', sans-serif;font-size:9pt">
Install dependencies
</span>

```bash
  npm install
  or
  yarn install || yarn
```

<span style="font-family: 'Poppins', sans-serif;font-size:9pt">
Climb the Docker to use the Postgres
</span>

```bash
  docker pull postgres # Install Docker

  docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres # Climb the Docker
```

```bash
  docker exec -it pg bash # To use the Bash

  psql -U root # To use the Postgres
```

And now you can use the /src/database/schema.sql to use the Schema to create the database and the tables.

<br>

<span style="font-family: 'Poppins', sans-serif;font-size:9pt">
Start the server
</span>

```bash
  npm run dev # Start the server with NPM
  yarn dev # Start the server with YARN
```

<br />
<br />

<img src="https://camo.githubusercontent.com/3fa18cce0455bff030d54f283e560749b45f7bf4f2751857db81ff1bc3cb2bce/68747470733a2f2f696d672e69636f6e73382e636f6d2f6475736b2f36342f3030303030302f6b726974612e706e67"/> <span style="font-family: 'Poppins', sans-serif;font-size:20pt"> Demonstração do Projeto<span>

<br />

## CATEGORIES
<br />

### CREATE CATEGORIE

![Create Categorie Insomnia](/src/assets/Categories/CreateCategorie.jpeg)

<br />

### GET CATEGORIE
![Get Categorie Insomnia](/src/assets/Categories/GetCategorie.jpeg)

<br />

## CONTACTS
<br />

### POST CONTACT
![Post Contact Insomnia](/src/assets/Contacts/PostContact.jpeg)
<br />

### GET CONTACT
![Get Contact Insomnia](/src/assets/Contacts/GetContact.jpeg)

<br />

### GET CONTACT BY ID
![Get Contact By Id Insomnia](/src/assets/Contacts/GetContactById.jpeg)

<br />

### UPDATE CONTACT
![Update Contact Insomnia](/src/assets/Contacts/UpdateContact.jpeg)
![Contact Updated Insomnia](/src/assets/Contacts/ContactUpdated.jpeg)

<br />

### DELETE CONTACT
![Delete Contact Insomnia](/src/assets/Contacts/DeleteContact.jpeg)

![Contact Deleted Insomnia](/src/assets/Contacts/ContactDeleted.jpeg)

<br/>
<br/>

## Contact

<div>
  <a href = "mailto:ericpandrade085@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=red" target="_blank"></a>
  <a href="https://www.linkedin.com/in/eric-andrade-872a01210/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="https://api.whatsapp.com/send?phone=+5585989828188&text=Olá! Gostaria de entrar em contato." target="_blank"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank"></a>
</div>

<span style="font-family: 'Poppins', sans-serif;font-size:9pt; font-style:italic">
Projeto feito por Eric Pereira Andrade.
</span>
