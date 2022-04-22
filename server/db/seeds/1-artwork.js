exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artwork')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('artwork').insert([
        {
          id: 1,
          title: 'banana',
          pixels: `["#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333"]`,
        },
        {
          id: 2,
          title: 'apple',
          pixels: `["#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333","#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333", "#333333"]`,
        },
      ])
    })
}
