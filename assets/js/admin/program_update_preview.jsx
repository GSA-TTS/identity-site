const Accordion = ({ title, content, id }) => (
  <div className="usa-accordion usa-accordion--bordered">
    <h4 className="usa-accordion__heading">
      <button
        type="button"
        className="usa-accordion__button"
        aria-expanded="true"
        aria-controls={id}
      >
        {title}
      </button>
    </h4>
    <div id={id} className="usa-accordion__content">
      {content}
    </div>
  </div>
);

const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

const IndexView = ({ title, date, preview }) => (
  <div className="index-view">
    <ul className="usa-collection partners-collection">
      <div className="usa-collection__body">
        <h3 className="usa-collection__heading">
          <a className="partners-link caret" href="#">
            {title}
          </a>
        </h3>
        <div className="usa-collection__description partners-body">{preview}</div>
        <ul className="usa-collection__meta">
          <li className="usa-collection__meta-item">
            <time dateTime={date}>{date}</time>
          </li>
        </ul>
      </div>
    </ul>
  </div>
);

const EntryView = ({ title, date, body }) => (
  <div className="entry-view">
    <div className="padding-bottom-6">
      <header>
        <h1 className="partners-title">{title}</h1>
      </header>
      <article>
        <div className="grid-row">
          <div className="tablet:grid-col-8 partners-body">
            <div className="partners-border" />
            <div className="margin-y-105">
              <time dateTime={date}>{date}</time>
            </div>
            <div className="partners-border" />
            <div className="partners-body padding-top-3 padding-bottom-2">{body}</div>
            <a href="#" className="partners-body caret">
              Read more program updates
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
);

const ProgramUpdatePreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']) || '(Missing title)';
  const body = widgetFor('body') || <p>(Missing body text)</p>;
  const preview = widgetFor('preview') || <p>(Missing preview text)</p>;
  const date = entry.getIn(['data', 'date']);
  const formattedDate = formatDate(date);

  return (
    <div className="container partners-container partners-preview">
      <Accordion
        title="Preview of index page listing"
        content={<IndexView title={title} date={formattedDate} preview={preview} />}
        id="index-preview"
      />
      <Accordion
        title="Preview of program update entry"
        content={<EntryView title={title} date={formattedDate} body={body} />}
        id="entry-preview"
      />
    </div>
  );
};

export default ProgramUpdatePreview;
