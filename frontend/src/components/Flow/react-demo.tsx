import React, { useCallback, useState, useMemo } from 'react';

import {
    usePlayground, usePlaygroundDrag, usePlaygroundTools,
    Command,
    PlaygroundReact,
    PlaygroundReactContent,
    PlaygroundReactProps,
} from '@flowgram.ai/playground-react';

import { createRoot } from 'react-dom/client';

// 加载画布样式
import '@flowgram.ai/playground-react/index.css';

export function Card() {
    return (
        <div
            style={{
                width: 200,
                height: 100,
                position: 'absolute',
                color: 'white',
                backgroundColor: 'red',
                left: 500,
                top: 500,
            }}
        ></div>
    );
}

export function DragableCard() {
    const [pos, setPos] = useState({ x: 200, y: 100 });
    // 用于拖拽，拖拽到边缘时候会自动滚动画布
    const dragger = usePlaygroundDrag();
    const playground = usePlayground();
    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            const startPos = { x: pos.x, y: pos.y };
            dragger.start(e, {
                onDragStart() {
                    playground.config.grabDisable = true;
                    // start drag
                },
                onDrag(dragEvent) {
                    // 需要 除去当前的缩放比例
                    setPos({
                        x: startPos.x + (dragEvent.endPos.x - dragEvent.startPos.x) / dragEvent.scale,
                        y: startPos.y + (dragEvent.endPos.y - dragEvent.startPos.y) / dragEvent.scale,
                    });
                },
                onDragEnd() {
                    playground.config.grabDisable = false;
                    // end drag
                },
            });
            // e.stopPropagation();
            // e.preventDefault();
        },
        [pos]
    );
    return (
        <div
            onMouseDown={handleMouseDown}
            style={{
                cursor: 'move',
                width: 200,
                height: 100,
                position: 'absolute',
                color: 'white',
                backgroundColor: 'blue',
                left: pos.x,
                top: pos.y,
            }}
        ></div>
    );
}

export const PlaygroundTools: React.FC<{ minZoom?: number; maxZoom?: number }> = (props) => {
    const tools = usePlaygroundTools(props);
    return (
        <div
            style={{
                position: 'absolute',
                zIndex: 100,
                right: 100,
                bottom: 100,
                padding: 13,
                border: '1px solid #ccc',
                backgroundColor: 'white',
                borderRadius: 8,
                userSelect: 'none',
                cursor: 'pointer',
            }}
        >
            <button onClick={() => tools.toggleIneractiveType()}>{tools.interactiveType}</button>
            <button onClick={() => tools.zoomout()}>Zoom Out</button>
            <button onClick={() => tools.zoomin()}>Zoom In</button>
            <span>{Math.floor(tools.zoom * 100)}%</span>
        </div>
    );
};



/**
 * 用于提供纯画布缩放能力
 */
export function ReactDemo() {
    const playgroundProps = useMemo<PlaygroundReactProps>(
        () => ({
            // 是否增加背景
            background: true,
            playground: {
                ineractiveType: 'MOUSE', // 鼠标模式, MOUSE | PAD
            },
            // 自定义快捷键
            shortcuts(registry, ctx) {
                registry.addHandlers(
                    /**
                     * 放大
                     */
                    {
                        commandId: Command.Default.ZOOM_IN,
                        shortcuts: ['meta =', 'ctrl ='],
                        execute: () => {
                            ctx.playground.config.zoomin();
                        },
                    },
                    /**
                     * 缩小
                     */
                    {
                        commandId: Command.Default.ZOOM_OUT,
                        shortcuts: ['meta -', 'ctrl -'],
                        execute: () => {
                            ctx.playground.config.zoomout();
                        },
                    }
                );
            },
        }),
        []
    );
    /*
     * PlaygroundReact 画布 react 容器, background 属性可以关闭背景的点点点
     * PlaygroundReactContent 画布内容，会跟着缩放
     */
    return (
        <PlaygroundReact {...playgroundProps}>
            <PlaygroundReactContent>
                <Card />
                <DragableCard />
            </PlaygroundReactContent>
            <PlaygroundTools />
        </PlaygroundReact>
    );
}
