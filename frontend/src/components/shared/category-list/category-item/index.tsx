import { ReactElement } from 'react';
import { styled, Typography, Box } from '@mui/material';
import { ICategory } from '../../../../services/api/category/dto/category.dto';
import { generatePath, Link } from 'react-router-dom';
import { RouteEnum } from '../../../../routes/enums/route.enum';
import { generateImageUrl } from '../../../../helpers/url-helper';

const Image = styled('img')({
  width: '100%',
  objectFit: 'cover',
  borderRadius: 12,
});

const CategoryCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  cursor: 'pointer',
  borderBottom: '2px solid',
  borderColor: theme.palette.background.default,

  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

interface Props {
  category: ICategory;
}

const CategoryItem = ({ category }: Props): ReactElement => {
  return (
    <StyledLink to={generatePath(RouteEnum.CATEGORY_PRODUCTS, { id: category.id.toString() })}>
      <CategoryCard>
        <Image src={generateImageUrl(category.image)} alt={category.title} />
        <Typography align="center" variant="subtitle1">
          {category.title}
        </Typography>
      </CategoryCard>
    </StyledLink>
  );
};

export default CategoryItem;
