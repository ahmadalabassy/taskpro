import React from 'react'
import { Card } from 'react-bootstrap'
import styles from "./ProgressStateCard.module.css"


interface ComparisonData {
    value: number
    trend: "up" | "down"
    text: string
}

interface StatCardProps {
    title: string
    value: number
    comparison?: ComparisonData
    icon?: React.ReactNode
}

const ProgressStateCard = ({ title, value, comparison, icon }: StatCardProps) => {
    return (
        <Card className={styles.statCard}>
            <Card.Body className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <div className={styles.title}>{title}</div>
                    {icon && <div className={styles.icon}>{icon}</div>}
                </div>
                <div className={styles.value}>{value}</div>
                {comparison && (
                    <div className={`${styles.comparison} ${comparison.trend === "up" ? styles.positive : styles.negative}`}>
                        {comparison.trend === "up" ? <i className="bi bi-arrow-up"></i> : <i className="bi bi-arrow-down"></i>}
                        <span>
                            {comparison.value}% {comparison.text}
                        </span>
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProgressStateCard