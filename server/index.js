const {com, dia} = require('./vendor/rappid.min');

const Channel = com.Channel;

const graph = new dia.Graph;
const channel = new Channel({port: 4141, graph});

graph.on('change', e => {
    console.log('change');
    // console.log(graph.toJSON());

});
graph.on('add', e => console.log('add'));
graph.on('remove', e => console.log('remove'));
