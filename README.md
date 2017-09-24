## overall
### POST
```
header: Content-Type = application/x-www-form-urlencoded
```

### authentication
```
header: x-access-token = token
```

### response
```
{
    "result": "success", / "err"
    "data": {
        xxx
    }
}
```

## user
### register
url: /api/user/register POST
body: `email`=?&`password`=?&`username`=?
response:

```
{
    "result": "success",
    "data": {
        "userId": 5
    }
}
```

### log_in
url: /api/user/log_in POST
body: `email`=?&`password`=?
response:

```
{
    "result": "success",
    "data": {
        "id": 1,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTA2MjE2OTc1LCJleHAiOjE1MzYyMTY5NzV9.WVm-4XeQ_K4Qme4-Rrd-xwZJogRCnEuJBN7Rfxl_RkU"
    }
}
```

## following
### follow
url: /api/following/follow POST (requires token)
body: `email`=?
response:

```
{
    "result": "success",
    "data": {}
}
```

## goal
### create
url: /api/goal/create POST (requires token)
body: `title`=?&`description`=?&`repeat_day`=?&`duration`=? (repeat_day: MTWUFAN)
response:

```
{
    "result": "success",
    "data": {
        "goalId": 23
    }
}
```

### check
url: /api/goal/check POST (requires token)
body: `ugm_id`=?
response:

```
{
    "result": "success",
    "data": {}
}
```

### share
url: /api/goal/share POST (requires token)
body: `ugm_id`=?
response:

```
{
    "result": "success",
    "data": {}
}
```

### get all goals between two dates
url: /api/goal/date?`s`=X&`e`=X GET (requires token)
response:

```
{
    "result": "success",
    "data": {
        "goals": [
            {
                "id": 64,
                "title": "goal_test8711",
                "description": "this is a goal description   ",
                "location": null,
                "start_time": "2017-09-25T15:22:22.000Z",
                "end_time": "2017-09-25T20:23:33.000Z",
                "is_checked": "f",
                "checked_time": null
            }
        ]
    }
}
```

### get all sub goals
url: /api/goal/sub?`g`=X GET (requires token)
response:

```
{
    "result": "success",
    "data": {
        "goals": [
            {
                "id": 64,
                "user_id": 1,
                "goal_id": 32,
                "start_time": "2017-09-25T15:22:22.000Z",
                "end_time": "2017-09-25T20:23:33.000Z",
                "is_shared": "f",
                "shared_time": null,
                "is_checked": "f",
                "checked_time": null
            }
        ]
    }
}
```

### get all followees' goals
url: /api/goal/following GET (requires token)
response:

```
{
    "result": "success",
    "data": {
        "goals": [
            {
                "username": "ch",
                "shared_time": "2017-09-24T02:48:34.000Z",
                "title": "goal_test8711",
                "description": "this is a goal description   ",
                "start_time": "2017-09-28T15:22:22.000Z",
                "end_time": "2017-09-28T20:23:33.000Z"
            }
        ]
    }
}
```

## event
### create
url: /api/event/create POST
body: `title`=?`&start_time`=?&`end_time`=?&`location`=?&`description`=?&`image_url`=?&`doc_link`=?&`homepage_link`=?&`type`=?

response:

```
{
    "result": "success",
    "data": {
        "eventId": 4
    }
}
```

### attend
url: /api/event/attend POST (requires token)
body: `event_id`=?
response:

```
{
    "result": "success",
    "data": {}
}
```

### share
url: /api/event/share POST (requires token)
body: `event_id`=?

```
{
    "result": "success",
    "data": {}
}
```

### like
url: /api/event/like POST (requires token)
body: `event_id`=?

```
{
    "result": "success",
    "data": {}
}
```

### get all events between two dates
url: /api/event/date?`s`=X&`e`=X GET (requires token)
response:

```
{
    "result": "success",
    "data": {
        "goals": [
            {
                "id": 64,
                "title": "goal_test8711",
                "description": "this is a goal description   ",
                "location": null,
                "start_time": "2017-09-25T15:22:22.000Z",
                "end_time": "2017-09-25T20:23:33.000Z",
                "is_checked": "f",
                "checked_time": null
            }
        ]
    }
}
```

### get all future events generated from one source (such as email)
url: /api/event/source?`s`=X GET (requires token)
response:

```
{
    "result": "success",
    "data": {
        "events": [
            {
                "id": 2,
                "title": "test2",
                "start_time": "2017-09-26T03:00:00.000Z",
                "end_time": "2017-09-26T03:00:00.000Z",
                "location": "Rice, Houston, TX  ",
                "gps": "111, 222",
                "description": "this is a very fantastic event!   ",
                "image_url": "http://img002.21cnimg.com/photos/album/20150702/m600/2D79154370E073A2BA3CD4D07868861D.jpeg",
                "doc_link": "http://hahha.com",
                "homepage_link": "http://test.z",
                "type": "public"
            }
        ]
    }
}
```

### get all liked events
url: /api/event/liked GET (requires token)
response:

```
{
    "result": "success",
    "data": {
        "events": [
            {
                "id": 2,
                "title": "test2",
                "start_time": "2017-09-26T03:00:00.000Z",
                "end_time": "2017-09-26T03:00:00.000Z",
                "location": "Rice, Houston, TX  ",
                "gps": "111, 222",
                "description": "this is a very fantastic event!   ",
                "image_url": "http://img002.21cnimg.com/photos/album/20150702/m600/2D79154370E073A2BA3CD4D07868861D.jpeg",
                "doc_link": "http://hahha.com",
                "homepage_link": "http://test.z",
                "type": "public"
            }
        ]
    }
}
```

### get event by id
url: /api/event/X GET
response:

```
{
    "result": "success",
    "data": {
        "event": [
            {
                "id": 2,
                "title": "test2",
                "start_time": "2017-09-26T03:00:00.000Z",
                "end_time": "2017-09-26T03:00:00.000Z",
                "location": "Rice, Houston, TX  ",
                "gps": "111, 222",
                "description": "this is a very fantastic event!   ",
                "image_url": "http://img002.21cnimg.com/photos/album/20150702/m600/2D79154370E073A2BA3CD4D07868861D.jpeg",
                "doc_link": "http://hahha.com",
                "homepage_link": "http://test.z",
                "type": "public"
            }
        ]
    }
}
```

### get events by keyword (id)
url: /api/event/keyword?`k`=X GET
response:

```
{
    "result": "success",
    "data": {
        "events": [
            {
                "id": 2,
                "title": "test2",
                "start_time": "2017-09-26T03:00:00.000Z",
                "end_time": "2017-09-26T03:00:00.000Z",
                "location": "Rice, Houston, TX  ",
                "gps": "111, 222",
                "description": "this is a very fantastic event!   ",
                "image_url": "http://img002.21cnimg.com/photos/album/20150702/m600/2D79154370E073A2BA3CD4D07868861D.jpeg",
                "doc_link": "http://hahha.com",
                "homepage_link": "http://test.z",
                "type": "public"
            }
        ]
    }
}
```

### get all followee's events
url: /api/event/following GET (requires token)
response:

```
{
    "result": "success",
    "data": {
        "events": [
            {
                "username": "ch",
                "shared_time": "2017-09-25T15:34:54.000Z",
                "id": 2,
                "title": "test2",
                "start_time": "2017-09-26T03:00:00.000Z",
                "end_time": "2017-09-26T03:00:00.000Z",
                "location": "Rice, Houston, TX  ",
                "gps": "111, 222",
                "description": "this is a very fantastic event!   ",
                "image_url": "http://img002.21cnimg.com/photos/album/20150702/m600/2D79154370E073A2BA3CD4D07868861D.jpeg",
                "doc_link": "http://hahha.com",
                "homepage_link": "http://test.z",
                "type": "public"
            },
        ]
    }
}
```
