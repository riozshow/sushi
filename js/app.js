const initApp = async () => {
  const users = await db.get('users', {name: 'test', password: 'dsadaas'})

  console.log(users.toArray());

  const ids = users.toArray();

  await db.patch(`users/${ids[0]._id}`, { name: 'tesltdasdsa'});

  //await db.delete(`users/${ids[0]}`, { name: 'tesltdas'});

}




initApp();
