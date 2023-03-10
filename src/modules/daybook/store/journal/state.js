//export default ()=>({})


export default ()=>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Exercitation cillum incididunt in nulla nostrud nulla sint ut non culpa eiusmod officia adipisicing ipsum.',
            picture: null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Enim minim mollit adipisicing proident est sit cupidatat dolor aute fugiat culpa nostrud exercitation mollit. Sint consectetur elit est laborum. Ullamco dolore exercitation in id labore sit officia in labore exercitation elit non aute. Ullamco nulla dolore exercitation proident incididunt do anim anim cupidatat consectetur. Eu minim nulla proident enim excepteur. Labore tempor consequat incididunt consectetur ipsum cupidatat amet esse mollit magna consequat culpa esse culpa.',
            picture: null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Consequat aliquip est id deserunt cillum in sint qui do velit do esse. Ad id labore est proident consequat sint ex sunt laboris culpa culpa pariatur. Proident consequat magna enim exercitation est duis labore cillum aute magna eu esse consectetur dolore.',
            picture: null
        }
    ]
})