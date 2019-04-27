<h1>Design Your Life - Backend</h1>

<b>With NodeJS, Postgres, and JWT</b>

<strong><h2>Setup</h2></strong>

<em>Let's get started</em>

```Download the repo, clone, and install into the directory of your choice```

<strong>Install dependencies</strong>

```Navigate into the backend folder, open your terminal, and type "NPM install"```

<strong>Testing endpoints</strong>

```Simply type "npm test" and the testing will begin```

<strong>Start the server</strong>

```Open your terminal and type "nodemon start"```

Now you are ready to test your endpoints. 

<strong><h2>Endpoints</h2></strong>

The database consists of three tables (Users, Activities, and Reflections)

To register a new user, send a post request to ```https://polar-plateau-24996.herokuapp.com/api/register```

This register endpoint takes in four required fields:
```
{
    name: string
    email: string
    username: string
    password: string
}
```
This will return the id of the user you just created, which is auto-generated. 

Now you can head over to login at ```https://polar-plateau-24996.herokuapp.com/api/login```
```
{
    username: string
    password: string
}
```
<em>If correct login information is entered, you should receive back an object with your username, your id, and a token.</em>
```
{
    Welcome: username,
    userId: 1,
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6Ikpxxxxx
}
```
<em><strong>This token is required to access all other endpoints.

 You must mount this token into headers as `Authorization: ${token}`</strong></em>

After you have successfully logged in and mounted your token, you can head over to either:

```https://polar-plateau-24996.herokuapp.com/activities```

or

```https://polar-plateau-24996.herokuapp.com/reflections```

This get request will return a list of activities or reflections that belong to the user you are logged in as.

To post, activities takes in 5 fields, all required:
```
{
	name: string,
	fk: integer, foreign key field relates the userid who owns the activity
	enjoymentRating: integer,
	energyLevel: integer,
	engagement: integer
}
```
Reflections takes in 6 required fields:
```
{
	week: string,
	fk:  integer, foreign key field relates the userid who owns the activity
	journalEntry: text,
	insights: text,
	trends: text,
	surprises: text
}
```
Both activities and reflections auto-generate an id and a timestamp of creation date.

If you navigate to either activites or reflections endpoint with an id at the end (```https://polar-plateau-24996.herokuapp.com/reflections/1```), this will fetch you the reflection or activity matching that id. You can also post an update(put) to these endpoints.