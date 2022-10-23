import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Link from '../Link';
import Title from '../Title';

import styles from './styles.module.scss';

interface JobProps {
  ativa: boolean;
  cargo: string;
  link: string;
  localizacao: LocationProps;
}

interface LocationProps {
  bairro: string;
  cidade: string;
  pais: string;
}

const JobsFooter = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    api
      .get('/')
      .then(({ data }) =>
        setJobs(data.vagas.filter((job: JobProps) => job.ativa === true))
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.container}>
      <Title>Vagas em Aberto</Title>
      <Title isCenter={false}>Desenvolvimento</Title>
      {jobs.map((job, index) => (
        <div key={index} className={styles.jobsList}>
          <Link href={job.link} isCenter={false}>
            {job.cargo}
          </Link>
          {job.localizacao?.bairro ? (
            <h3>{`${job.localizacao?.bairro} - ${job.localizacao?.cidade}, ${job.localizacao?.pais}`}</h3>
          ) : (
            <h3>{`Remoto`}</h3>
          )}
        </div>
      ))}
    </section>
  );
};

export default JobsFooter;
