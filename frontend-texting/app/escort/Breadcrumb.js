const BreadcrumbRow = () => {
    return (
      <nav className="breadcrumb-row">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          id="sk1"
          className="breadcrumb mybrcrumb"
        >
          {/* Home Breadcrumb */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="breadcrumb-item homeIcon"
          >
            <a
              itemProp="item"
              href="http://localhost:3000/"
              itemScope
              itemType="http://schema.org/Service"
              id="http://localhost:3000/"
              itemID="http://localhost:3000/"
            >
              <i itemProp="name" className="fa fa-home">
                <span className="bcseo-text">Sduko India</span>
              </i>
            </a>
            <meta itemProp="position" content="1" />
          </li>
  
          {/* Escorts Breadcrumb */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="breadcrumb-item"
          >
            <a
              itemProp="item"
              href="http://localhost:3000/escorts/"
              itemScope
              itemType="http://schema.org/Service"
              id="http://localhost:3000/escorts/"
              itemID="http://localhost:3000/escorts/"
            >
              <div itemProp="name">Escorts</div>
            </a>
            <meta itemProp="position" content="2" />
          </li>
  
          {/* Delhi Region Breadcrumb */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="breadcrumb-item"
          >
            <a
              itemProp="item"
              href="http://localhost:3000/escorts/delhi-region/"
              itemScope
              itemType="http://schema.org/Place"
              id="http://localhost:3000/escorts/delhi-region/"
              itemID="http://localhost:3000/escorts/delhi-region/"
            >
              <div itemProp="name">Delhi region Escorts</div>
            </a>
            <meta itemProp="position" content="3" />
          </li>
  
          {/* Delhi Escorts Breadcrumb */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="breadcrumb-item"
          >
            <a
              itemProp="item"
              href="http://localhost:3000/escorts/delhi/"
              itemScope
              itemType="http://schema.org/Place"
              id="http://localhost:3000/escorts/delhi/"
              itemID="http://localhost:3000/escorts/delhi/"
            >
              <div itemProp="name">Delhi Escorts</div>
            </a>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>
    );
  };
  
  export default BreadcrumbRow;
  