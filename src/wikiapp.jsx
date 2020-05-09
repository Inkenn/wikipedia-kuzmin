import React from 'react';

function titler(pages) {
  const pagestitles = [];
  for (let i = 0; i < pages.length; i++) {
    pagestitles[i] = pages[i].title;
  }
  return pagestitles;
}
class WikiApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pt: [],
    };
  }

  async getFetch() {
    const pageurls = 'https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=random&rnlimit=5';
    const response = await fetch(pageurls);
    return response;
  }
  componentDidMount() {
    this.createRandomPages();
  }

  async createRandomPages() {
    const response = await this.getFetch();
    const trashpages = await response.json();
    this.setState((prevState) => ({
      pt: titler(trashpages.query.random),
    }));
    return true;
  }

  handleRefresh() {
    const emptypages = [];
    this.setState((prevState) => ({
      pt: emptypages,
    }));
    this.createRandomPages();
  }


  render() {
    const pages = this.state.pt;
    const list = pages.map((title, pindex) => {
      const href = `https://wikipedia.org/wiki/${title}`;
      return (
        <div className="row" key={title}>
          <div className="col-md-12">
            <h3 id={`h_${pindex}`}>
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
