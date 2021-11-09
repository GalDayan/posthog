import { EventDefinition } from '~/types'

export const mockEventDefinitions: EventDefinition[] = [
    'event1',
    'test event',
    '$click',
    '$autocapture',
    'search',
    'other event',
    ...Array(50),
].map((name, index) => ({
    id: `uuid-${index}-foobar`,
    name: name || `misc-${index}-generated`,
    description: `${name || 'name generation'} is the best!`,
    query_usage_30_day: index * 3 + 1,
    volume_30_day: index * 13 + 2,
}))

export const mockInsight = {
    id: 110,
    short_id: 'SvoU2bMC',
    name: null,
    filters: {
        breakdown: '$browser',
        breakdown_type: 'event',
        display: 'FunnelViz',
        events: [
            {
                id: '$pageview',
                type: 'events',
                order: 0,
                name: '$pageview',
                custom_name: null,
                math: null,
                math_property: null,
                properties: [],
            },
            {
                id: '$pageview',
                type: 'events',
                order: 1,
                name: '$pageview',
                custom_name: null,
                math: null,
                math_property: null,
                properties: [],
            },
            {
                id: '$pageview',
                type: 'events',
                order: 2,
                name: '$pageview',
                custom_name: null,
                math: null,
                math_property: null,
                properties: [],
            },
            {
                id: '$pageview',
                type: 'events',
                order: 3,
                name: '$pageview',
                custom_name: null,
                math: null,
                math_property: null,
                properties: [],
            },
        ],
        funnel_from_step: 0,
        funnel_to_step: 1,
        funnel_viz_type: 'steps',
        insight: 'FUNNELS',
        interval: 'day',
        layout: 'vertical',
    },
    filters_hash: 'cache_d0d88afd2fd8dd2af0b7f2e505588e99',
    order: null,
    deleted: false,
    dashboard: null,
    dive_dashboard: null,
    layouts: {},
    color: null,
    last_refresh: null,
    refreshing: false,
    result: null,
    created_at: '2021-09-22T18:22:20.036153Z',
    description: null,
    updated_at: '2021-09-22T19:03:49.322258Z',
    tags: [],
    favorited: false,
    saved: false,
    created_by: {
        id: 1,
        uuid: '017c0441-bcb2-0000-bccf-dfc24328c5f3',
        distinct_id: 'fM7b6ZFi8MOssbkDI55ot8tMY2hkzrHdRy1qERa6rCK',
        first_name: 'Alex',
        email: 'alex@posthog.com',
    },
}