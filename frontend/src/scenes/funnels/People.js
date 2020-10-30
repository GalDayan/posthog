import React from 'react'
import { useValues } from 'kea'
import { funnelLogic } from './funnelLogic'
import { Link } from 'lib/components/Link'
import { Card, percentage, Loading } from 'lib/utils'
import { EntityTypes } from 'scenes/insights/trendsLogic'
import './FunnelPeople.scss'

export function People() {
    const { stepsWithCount, peopleSorted, peopleLoading } = useValues(funnelLogic)

    return (
        <Card title="Per user" style={{ padding: 16 }} className="funnel-people">
            {peopleLoading && <Loading />}
            {!peopleSorted && !peopleLoading && (
                <div style={{ textAlign: 'center', margin: '3rem 0' }}>No users found for this funnel.</div>
            )}
            {peopleSorted && peopleSorted.length > 0 && (
                <table className="table-bordered table-full-width">
                    <tbody>
                        <tr>
                            <th />
                            {stepsWithCount &&
                                stepsWithCount.map((step, index) => (
                                    <th key={index}>
                                        {step.type === EntityTypes.ACTIONS ? (
                                            <Link to={'/action/' + step.action_id}>{step.name}</Link>
                                        ) : (
                                            step.name
                                        )}
                                    </th>
                                ))}
                        </tr>
                        <tr>
                            <td />
                            {stepsWithCount &&
                                stepsWithCount.map((step, index) => (
                                    <td key={index}>
                                        {step.count}&nbsp;{' '}
                                        {step.count > 0 && (
                                            <span>({percentage(step.count / stepsWithCount[0].count)})</span>
                                        )}
                                    </td>
                                ))}
                        </tr>
                        {peopleSorted &&
                            peopleSorted.map((person) => (
                                <tr key={person.id}>
                                    <td className="text-overflow">
                                        <Link to={`/person_by_id/${person.id}`}>{person.name}</Link>
                                    </td>
                                    {stepsWithCount.map((step, index) => (
                                        <td
                                            key={index}
                                            className={
                                                step.people.indexOf(person.uuid) > -1
                                                    ? 'funnel-success'
                                                    : 'funnel-dropped'
                                            }
                                        />
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </Card>
    )
}
