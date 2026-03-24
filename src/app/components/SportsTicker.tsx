export function SportsTicker() {
  return (
    <div className="bg-white border-b border-[#e5e7eb] w-full">
      <iframe
        className="scorestreamIframe w-full"
        src="https://scorestream.com/widgets/scoreboards/horz?userWidgetId=36921&widgetType=horzScoreboard&widgetData=%7B%22userWidgetId%22%3A36921%2C%22widgetType%22%3A%22horzScoreboard%22%7D"
        style={{ border: 'none', display: 'block' }}
        title="Sports Scores"
      />
    </div>
  );
}
