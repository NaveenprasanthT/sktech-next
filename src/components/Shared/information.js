import React from 'react'
import Styles from "@/styles/Shared/information.module.css"

const Information = (props) => {
  return (
    <div className={Styles.ppWrapper}>
    <h1 className={Styles.ppHeader}>{props?.header}</h1>
    <div>
        {props?.data.map((data)=>(
            <div>
                <h3 className={Styles.ppTitle}>{data?.title}</h3>
                <p className={Styles.ppDescription}>{data?.content}</p>
                <div className={Styles.ppList}>
                {data.list === true && (
                  data?.listContent.map((list)=>(
                    <ul className={Styles.ppListUl}>
                        <li>{list}</li>
                    </ul>
                  ))
                )}
                </div>
                {data?.desc && (
                    data?.desc.map((value)=>(
                        <p className={Styles.ppBottomContent}>{value}</p>
                    ))
                )}
                {data?.info && (<h2 className={Styles.ppInfo}>{data.info}</h2>)}
            </div>
        ))}
    </div>
</div>
  )
}

export default Information