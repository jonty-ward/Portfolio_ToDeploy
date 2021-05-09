import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Skills = () => {
  return (
    <div>
      <h1>Skills </h1>

      <Container>
        <Row>
          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="react hooks" src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"/>
            <p>React Hooks</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="JavaScript" src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"/>
            <p>JavaScript</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="HTML" src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_html5-512.png"/>
            <p>HTML</p>
          </Col>
       
          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="CSS" src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_css3-512.png"/>
            <p>CSS</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="React bootstrap" src="https://camo.githubusercontent.com/504f214ea6c4ad89f1aa4f144ff0d08f705daf9266edf1e36fa12469ded8de39/68747470733a2f2f69322e77702e636f6d2f626c6f672e6c6f67726f636b65742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f72656163742d626f6f7473747261702d7475746f7269616c2e706e673f773d3534342673736c3d31"/>
            <p>React Bootstrap</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Semantic UI" src="https://semantic-ui.com/images/logo.png"/>
            <p>Semantic UI</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Sass" src="https://symbols-electrical.getvecta.com/stencil_25/76_sass.ba26158d9f.png"/>
            <p>Sass</p>
          </Col>
        </Row>

        <Row>
    
    
          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="PostgeSQL" src="https://www.patricktapiojohnson.com/static/media/postgresql.eb59bfba.png"/>
            <p>PostgeSQL</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Express" src="https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/express_js.png"/>
            <p>Express</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Node" src="https://img.icons8.com/color/452/nodejs.png"/>
            <p>Node</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Python" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"/>
            <p>Python</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Mongoose" src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4"/>
            <p>Mongoose</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Django" src="data:image/png;base64,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"/>
            <p>Django</p>
          </Col>


          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="MongoDB" src="data:image/png;base64,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"/>
            <p>MongoDB</p>
          </Col>


        </Row>

        <Row>
         
          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Table Plus" src="https://www.patricktapiojohnson.com/static/media/tableplus.5f0a1cd5.png"/>
            <p>Table Plus</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="SQL" src="https://www.patricktapiojohnson.com/static/media/sql.25511861.webp"/>
            <p>SQL</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Git and Github" src="data:image/png;base64,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"/>
            <p>Git & GitHub</p>
          </Col>
          
          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Netlify" src="https://www.patricktapiojohnson.com/static/media/netlify.d08f9e20.png"/>
            <p>Netlify</p>
          </Col>
          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Heroku" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF1klEQVR42u3dW1NTVxgG4MA/sLfl1xQu9LpYsNU69qDT2s50pudyCiBSmQp2RkQQetBpa3VsrbUjrdpqwiEcwyEEAnJQAaWQgGIAScjXtbb2ptWWlWSv/e3kfWfeK0dZ7O/ZMdlrJ3E4EARBEARBEARBEARBkpSifHdmcZ5rq2iTqF80LEroExt+fIzksdpWnOfOtPXwxS+RLerDYOPukGiO/c767e4MsfBy0RiGmHDlMaxw7rieYaczvxqDS3qP2GX4uzAs07qb+/C3iAYxKNMqj+0znAEUYEimt4gzgAAGZHpHuQ4/C8PR1iyOAHIwGG3N4QggF4PR1lyOALZjMNq6HQAAAAAAAAAAIJUB1L7XQ0OeeaP+zgUa7nrUkZ4gBXqDNCo65g3RWF+IbvSHaHxgkZpK+rUM4crpSfK1zyu38pU2ANhsvyofINWcrvabPvzD+ztoIxpTXtuEbxGPAKkAoP3SDMWTU5WDAGB3AIdeb6f1hxvK65oZX8ZzgFQA0HLhdpxnvw8AVPslMwCH9oqzfy2qvKbJoSW8CogLQBkvAG2/TCuvJyaeK9Z91AsAdgdQ/VYHRdbV/+/vvnoH1wFSAUC/e055LeH76/Tpa+0AYHcA9QVe46FcNT/WBXAl0O4ASvJddHvsvvI6bgyEqDgfl4JtD+Cn+lHlNaytRMVzhk7sBdgdQNU+D608iHB66AcAnQDkBpRq5MYVdgNTAIA8i1WzNL9Gla+2AYDdARx9t5serqpd8YtGY3SisA/3A6QCgNr3e4ydO5Ue/7hX1/ABwOrtYNwRpA1APwCkNYBSAAAAAEhfAF8AAADoBnBwTxvVvN1Jxz7oMZ7Z133YS5+/05Wsu3kBgAMA54tuY8A/HAtQ68VpGvUGaWF25X/v9ZPX+OXGkOfSDH1T5aOynS0AYCoAZ3IAlIqBNxb30e9np4xbs1Uv8jwtcp9A3iMobxQFAGYA5EP5uaMjxrX5tXCEzMyq+PfPm78BlH4AmuIA0HV5lka6gxSNbJDudPw6a9w/AAAWArA6rT9PA0DSAJTYD4CMfIIIAGkMYPHPVSp9qQUA0hWAzLnaEQBItI0lfbYFMD64CAAJAyi2LwD59vEDu1sBgDsA+eaNm8P3qM81Z1zUufzdJDWfmjA+AMLTPENT4s/i+SwAGXkdAwAYAVgLR2msP0RXz0wZ79at2uvZ1Do+e8ND/o555Z93oWEUAKwEIO/Tm/QvGWd1Q4GXnDvcca9F/t3ZiWWln//H2ZsAkEhPFKkDWFmOGO/j+77GTxV7kruD5zp/S2ktbRenASAhAIWbA/Dg3jp1X7lDX1cMGjt9Zj37ljuHKpG7hgCQQBsKvf+5AeO9dpdOHjR36ABgJYAC779eWgV6gnTmyDCV7dK/Fw8AmgEc/+QRgLlbYWo+OW7FvjsAWAlADrxeIOByKxYAaAbArQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQrMq3V31bNQQA6QpAfgJHNBJjgwAALABg3N7NBAEAWASACwIAsBAABwQAYDEAqxEAAAMAViIAACYArEIAAIwAWIEAAJgB0I0AABgC0IkAAJgC0IUAABgD+BuB/P4eAEhTAKG5VTq8vwMA0hGA2cMHAMYAdAwfAJgC0DV8AGAIQOfwAYAZAN3DBwBGAKwYPgAwARC6a83wAYABAGP4b1ozfACwGIDVwwcACwFwGD4AWASAy/ABwAIA8iNguQxfVn4nYedvs0+s/Mq4f1Z+YDUAoACAAgAKAGiqA8jFYLT1eY4AsjEYbc3mCOBZDEZbsxwcIxYWwHBMb8DBNWJxBRiQ6S3kDGCL6AKGZFqD8hg7OEcscCcGZVpfdtghYqHVGFbSW+OwS5x5rgyx4HLRGAaXcOUxPODMv57hsFvEwp8THcQQ466P5Wt+lRS+4MoUv8RW0UbRIdEwBvvUhh8fI3msthXlX8t0IAiCIAiCIAiCIAiCJCl/AYexXFEnrcxZAAAAAElFTkSuQmCC"/>
            <p>Heroku</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Insomnia" src="https://www.patricktapiojohnson.com/static/media/insomnia.4657d201.png"/>
            <p>Insomnia</p>
          </Col>

          <Col className="skills-icon-description-container">
            <img className="icon-image" alt="Mapbox" src="https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png"/>
            <p>Mapbox</p>
          </Col>


        </Row>
      </Container>

    </div>
  )
}

export default Skills
