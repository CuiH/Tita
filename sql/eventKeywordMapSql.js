const eventKeywordMap = {
	selectAllPublicByKeywordId: 'SELECT e.* FROM event e, event_keyword_map ekm ' +
	                    'WHERE ekm.keyword_id = ? AND ekm.event_id = e.id AND e.type = "public"',
};

module.exports = eventKeywordMap;
