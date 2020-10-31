import React from 'react';
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Profile = ({ user }) => {
    return (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
);
}
/* const Profile = ({ user }) => {
    return (
        <div className="profile">
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
} */

export default Profile;
