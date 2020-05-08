import React from 'react';
function titler(pages) {
    let pagestitles = [];
    for (let i = 0; i < pages.length; i++) {
        pagestitles[i] = pages[i].title;
    }
    return pagestitles;
}
class WikiApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rp: 5,
            pt: [],
        };
    };
    async getFetch() {
        var pageurls = 'https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=random&rnlimit=5';
        var response = await fetch(pageurls);
        return response;
    }
    async createRandomPages() {
        var response = await this.getFetch();
        var trashpages = await response.json();
        this.setState((prevState) =>
            ({
                pt: titler(trashpages.query.random),
            })
        );
        return true;
    }
    handleRefresh() {
        let emptypages = [];
        this.setState((prevState) => ({
            pt: emptypages,
            rp: 5,
        }));
        this.createRandomPages();
    }
    componentDidMount() {
        this.createRandomPages();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.pt.length) return false;
        return true;
    }
    render() {
        const pages = this.state.pt;
        const list = pages.map((title, pindex) => {
            let href = 'https://wikipedia.org/wiki/' + title;
            return (
                <div className="row" key={pindex}>
                    <div className="col-md-12">
                        <h3 id={'h_' + pindex}>
                            {title}
                        </h3>
                        <p>
                            <a className="btn" href={href}>На страницу »</a>
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">
                            Генерируем случайные страницы!
			</h2>
                        {list}
                        <div className="row">
                            <div className="col-md-12">
                                <button type="button" className="btn btn-secondary" onClick={() => this.handleRefresh()}>Сгенерировать ещё!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WikiApp;
export { titler };