import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  return res.json('Hello World');
});

export default router;