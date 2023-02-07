import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Container } from '@mui/system'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Typography, Box, Button } from '@mui/material'

const bannerSlide = (
  <SwiperSlide>
    <Grid
      container
      columnSpacing={3}
      spacing={3}
      direction="row"
      rowSpacing={3}
      alignItems="center"
      justifyContent="center"
      sx={{ my: 1 }}
    >
      <Grid item xs={12} sm={5}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="h3" fontWeight={700} sx={{ height: '100%', width: '100%' }}>
            50% Off For Your First Shopping
          </Typography>
          <Typography sx={{ color: 'secondary.dark', fontSize: '0.875rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut
            convalliss.
          </Typography>
          <Button
            sx={{
              bgcolor: (theme) => theme.palette.primary[500],
              '&:hover': {
                bgcolor: (theme) => theme.palette.primary[700],
              },
              color: 'white',
              minWidth: 64,
              width: 154,
              height: 44,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Shop Now
            </Typography>
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={5}>
        <Box
          component="img"
          src="https://bazaar.ui-lib.com/assets/images/products/nike-black.png"
          sx={{ maxWidth: 530, width: '100%', maxheight: 400, height: '100%' }}
        />
      </Grid>
    </Grid>
  </SwiperSlide>
)

const Carousel = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Container
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Swiper
          modules={[Pagination]}
          speed={800}
          slidesPerView={1}
          pagination={{ clickable: true, type: 'bullets' }}
          loop
        >
          {bannerSlide}
          {bannerSlide}
        </Swiper>
      </Container>
    </Box>
  )
}

export default Carousel
