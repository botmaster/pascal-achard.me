export default function({ store }) {
    console.log("process.server ", process.server);
    if (store.state.rss === process.server && !process.static) {
        return;
    }
    store.commit("SET_RENDERER", process.server);
}
