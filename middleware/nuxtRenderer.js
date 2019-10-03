export default function({ store }) {
    //console.log(process.server)
    if (store.state.rss === process.server) {
        return;
    }
    store.commit("SET_RENDERER", process.server);
}
