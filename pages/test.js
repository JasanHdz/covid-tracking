import BottomNavigation from 'common/menu/bottom-navigation'
import Navigation from 'common/menu/navigation'
import Wrapper from 'common/wrapper'
import Header from 'components/evaluation/header'
import UserDataForm from 'components/evaluation/user-data-form'

function Test() {
  return (
    <>
      <Wrapper>
        <Header />
        <UserDataForm />
      </Wrapper>
      {/* <Navigation /> */}
      <BottomNavigation />
    </>
  )
}

export default Test