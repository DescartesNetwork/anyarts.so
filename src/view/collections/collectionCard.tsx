import { MouseEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { Avatar, Button, Card, Col, Row, Space, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { AppState } from 'model'
import { useRoute } from 'hooks/useRoute'
import MagicEdenLogo from 'static/images/magic-eden-logo.jpeg'

export type CollectionCardProps = { symbol: string }

const CollectionCard = ({ symbol }: CollectionCardProps) => {
  const {
    collections: {
      [symbol]: { name, description, image, website, twitter, discord },
    },
  } = useSelector((state: AppState) => state)
  const { to } = useRoute()

  const onSocialMedia = (e: MouseEvent<HTMLElement>, url: string) => {
    e.stopPropagation()
    return window.open(url, '_blank')
  }
  const onDetails = useCallback(() => to(`/${symbol}`), [to, symbol])

  return (
    <Card
      cover={<img alt={symbol} src={image} />}
      bodyStyle={{ padding: 16 }}
      bordered={false}
      onClick={onDetails}
      hoverable
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title level={5} ellipsis>
            {name}
          </Typography.Title>
        </Col>
        <Col span={24}>
          <Typography.Paragraph ellipsis={{ rows: 2 }}>
            {description}
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]} align="middle">
            <Col flex="auto">
              <Avatar src={MagicEdenLogo} />
            </Col>
            <Col>
              <Space size={0}>
                <Button
                  type="text"
                  icon={<IonIcon name="earth-outline" />}
                  onClick={(e) => onSocialMedia(e, website)}
                  disabled={!website}
                />
                <Button
                  type="text"
                  icon={<IonIcon name="logo-twitter" />}
                  onClick={(e) => onSocialMedia(e, twitter)}
                  disabled={!twitter}
                />
                <Button
                  type="text"
                  icon={<IonIcon name="logo-discord" />}
                  onClick={(e) => onSocialMedia(e, discord)}
                  disabled={!discord}
                />
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default CollectionCard