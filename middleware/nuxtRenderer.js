export default function ({ store }) {
    console.log("process.server ", process.server);
    console.log("process.static ", process.static);
    if (store.state.rss === process.server && !process.static) {
        return;
    }
    store.commit("SET_RENDERER", process.server && !process.static);
}
