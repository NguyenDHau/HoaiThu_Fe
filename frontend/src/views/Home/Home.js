import { Grid } from '@mui/material'
import { PageLayout } from 'layouts/Main/components'
import { Carousel, NewArrivals, TopCategories, TopRatings, FeaturedBrands, ProductList } from './components'

const Home = () => {
  return (
    <>
      <Carousel />
      <PageLayout container isAsync={false}>
        <TopCategories />
        <Grid container spacing={4} sx={{ my: 1 }}>
          <Grid item md={6} xs={12}>
            <TopRatings />
          </Grid>
          <Grid item md={6} xs={12}>
            <FeaturedBrands />
          </Grid>
          <Grid item md={12} xs={12}>
            <NewArrivals />
          </Grid>
          <Grid item md={12} xs={12}>
            <ProductList />
          </Grid>
        </Grid>
      </PageLayout>
    </>
  )
}

export default Home
