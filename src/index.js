const app = require('express')();

const faunadb = require('faunadb');
const client = new faunadb.Client({ secret: '305224315390919180' })

const {
    Ref,
    Paginate,
    Get,
    Match,
    Index,
    Create,
    Collection,
    Join,
    Call,
} = faunadb.query;

app.listen(5000, () => console.log('API on http://localhost:5000'));

app.get('/provider/:id', async(req, res) => {

    const doc = await client.query(
        Get(
            Ref(
                Collection('providers'),
                req.params.id
            )
        )
    )

    res.send(doc)

});