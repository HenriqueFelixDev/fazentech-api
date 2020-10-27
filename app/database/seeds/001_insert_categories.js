
exports.seed = knex => {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {
          id: 1, 
          name: 'Laticínios', 
          description: 'Grupo de alimentos que inclui o leite, assim como os seus derivados processados', 
          icon: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/categories%2Fcheese.png?alt=media&token=4415d1dd-a2ad-4377-bbf9-f0ca8657a710'
        },
        {
          id: 2, 
          name: 'Bebidas', 
          description: 'Sucos naturais e bebidas alcoólicas', 
          icon: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/categories%2Fglass.png?alt=media&token=0d8a1636-567e-4941-8698-54b9f4aaaf6a'
        },
        {
          id: 3, 
          name: 'Cereais', 
          description: 'Grãos com alto valor nutritivo', 
          icon: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/categories%2Fcorn.png?alt=media&token=5b5912c6-5cc7-41bd-ba3b-f213e6c5a80a'
        },
        {
          id: 4, 
          name: 'Vegetais', 
          description: 'Alimentos ricos em vitaminas, minerais e fibras', 
          icon: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/categories%2Fvegetable.png?alt=media&token=38d86c34-4d97-43ae-a409-2159025845ab'
        },
        {
          id: 5, 
          name: 'Frutas', 
          description: 'Alimentos suculentos, doces ou ácidos, ricos em vitaminas', 
          icon: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/categories%2Ffruit.png?alt=media&token=c28dffcb-755a-447d-89e5-b0c9f2f7d92a'
        },
        {
          id: 6, 
          name: 'Carnes', 
          description: 'Carnes bovinas, suínas e aves', 
          icon: 'https://firebasestorage.googleapis.com/v0/b/fazentech-b6976.appspot.com/o/categories%2Fmeat.png?alt=media&token=e3c09a3b-03da-4180-a3e0-7a762c404457'
        },
      ]);
    });
};
